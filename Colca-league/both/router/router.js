
Router.configure({
    layoutTemplate: 'MasterLayout',
    loadingTemplate: 'Loading',
    notFoundTemplate: 'NotFound',
    templateNameConverter: 'none',
    routeControllerNameConverter: 'upperCamelCase',
    yieldTemplates: {
        'header': { to: 'header' },
        'footer': { to: 'footer' }
    }
});

Router.map(function () {
    this.route ('home', {path: '/', template:'home'});
});

