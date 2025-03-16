import './bonjour.scss';
import libraryMenu from '../../../scripts/libraryMenu';
import '../../../components/cardbuilder/card.scss';
import '../../../elements/emby-checkbox/emby-checkbox';
import Dashboard from '../../../utils/dashboard';

export default function (view, params) {

    document.querySelector('.skinHeader').classList.add('hide');

    view.querySelector('.bonjour').addEventListener('click', function () {
        Dashboard.navigate('home.html');
    });

    view.addEventListener('viewshow', function () {
        libraryMenu.setTransparentMenu(false);

        view.querySelector('.btnSelectServer').classList.add('hide');
    });

    view.addEventListener('viewhide', function () {
        libraryMenu.setTransparentMenu(true);
    });
}
