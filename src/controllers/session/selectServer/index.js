import escapeHtml from 'escape-html';
import loading from '../../../components/loading/loading';
import { appRouter } from '../../../components/router/appRouter';
import appSettings from '../../../scripts/settings/appSettings';
import focusManager from '../../../components/focusManager';
import globalize from '../../../lib/globalize';
import actionSheet from '../../../components/actionSheet/actionSheet';
import dom from '../../../scripts/dom';
import browser from '../../../scripts/browser';
import Dashboard from '../../../utils/dashboard';
import ServerConnections from '../../../components/ServerConnections';
import { ConnectionState } from '../../../utils/jellyfin-apiclient/ConnectionState.ts';
import './maintenance.scss';

const enableFocusTransform = !browser.slow && !browser.edge;

function autoConnectToServer() {
    loading.show();
    
    ServerConnections.getAvailableServers().then(function(availableServers) {
        if (availableServers.length > 0) {
            // Connect to the first available server
            const server = availableServers[0];
            
            ServerConnections.connectToServer(server, {
                enableAutoLogin: appSettings.enableAutoLogin()
            }).then(function (result) {
                loading.hide();
                const apiClient = result.ApiClient;
                
                switch (result.State) {
                    case ConnectionState.SignedIn:
                        Dashboard.onServerChanged(apiClient.getCurrentUserId(), apiClient.accessToken(), apiClient);
                        Dashboard.navigate('home.html');
                        break;
                    
                    case ConnectionState.ServerSignIn:
                        Dashboard.onServerChanged(null, null, apiClient);
                        Dashboard.navigate('login.html?serverid=' + result.Servers[0].Id);
                        break;
                   
                    default:
                        break;
                }
            }).catch(function(error) {
                loading.hide();
            });
        } else {
            loading.hide();
        }
    }).catch(function(error) {
        loading.hide();
    });
}

export default function (view, params) {
    const headerElement = document.querySelector('.skinHeader');
    headerElement.classList.add('hide');
    loading.show();
    view.addEventListener('viewshow', function (e) {
        const isRestored = e.detail.isRestored;
            if (!isRestored) {
                autoConnectToServer();
            }
    });
}

