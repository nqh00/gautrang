import 'material-design-icons-iconfont';
import '../../../styles/flexstyles.scss';
import '../../../elements/emby-scroller/emby-scroller';
import '../../../elements/emby-itemscontainer/emby-itemscontainer';
import '../../../components/cardbuilder/card.scss';
import '../../../elements/emby-button/emby-button';

function updatePageStyle(view, params) {
    if (params.showuser == '1') {
        view.classList.add('libraryPage');
        view.classList.remove('standalonePage');
        view.classList.add('noSecondaryNavPage');
    } else {
        view.classList.add('standalonePage');
        view.classList.remove('libraryPage');
        view.classList.remove('noSecondaryNavPage');
    }
}

export default function (view, params) {
    function deleteAllCookies() {
        document.querySelector('.skinHeader').classList.add('hide');
        const cookies = document.cookie.split(";");
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf('=');
            const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
        }
    }
    deleteAllCookies();
    updatePageStyle(view, params);
}

