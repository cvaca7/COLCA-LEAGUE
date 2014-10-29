var dataSet = [
    ['Trident','Internet Explorer 4.0','Win 95+','4','X'],
    ['Trident','Internet Explorer 5.0','Win 95+','5','C'],
    ['Trident','Internet Explorer 5.5','Win 95+','5.5','A'],
    ['Trident','Internet Explorer 6','Win 98+','6','A'],
    ['Trident','Internet Explorer 7','Win XP SP2+','7','A'],
    ['Trident','AOL browser (AOL desktop)','Win XP','6','A'],
    ['Gecko','Firefox 1.0','Win 98+ / OSX.2+','1.7','A'],
    ['Gecko','Firefox 1.5','Win 98+ / OSX.2+','1.8','A'],
    ['Gecko','Firefox 2.0','Win 98+ / OSX.2+','1.8','A'],
    ['Gecko','Firefox 3.0','Win 2k+ / OSX.3+','1.9','A'],
    ['Gecko','Camino 1.0','OSX.2+','1.8','A'],
    ['Tasman','Internet Explorer 4.5','Mac OS 8-9','-','X'],
    ['Tasman','Internet Explorer 5.1','Mac OS 7.6-9','1','C'],
    ['Tasman','Internet Explorer 5.2','Mac OS 8-X','1','C'],
    ['Misc','NetFront 3.1','Embedded devices','-','C'],
    ['Misc','NetFront 3.4','Embedded devices','-','A'],
    ['Misc','Dillo 0.8','Embedded devices','-','X'],
    ['Misc','Links','Text only','-','X'],
    ['Misc','Lynx','Text only','-','X'],
    ['Misc','IE Mobile','Windows Mobile 6','-','C'],
    ['Misc','PSP browser','PSP','-','C'],
    ['Other browsers','All others','-','-','U']
];

var options = {
    "emptyTable":     "No hay información que mostrar",
    "info":           "Mostrando desde  _START_ hasta _END_ del total de _TOTAL_ registros",
    "infoEmpty":      "No existen registros",
    "infoFiltered":   "(filtered from _MAX_ total entries)",
    "infoPostFix":    "",
    "thousands":      ",",
    "lengthMenu":     "Mostrar _MENU_ registros",
    "loadingRecords": "Cargando...",
    "processing":     "Procesando...",
    "search":         "Buscar:",
    "zeroRecords":    "No se encontraron registros",
    "paginate": {
        "first":      "Primero",
        "last":       "Ultimo",
        "next":       "Siguiente",
        "previous":   "Anterior"
    },
    "aria": {
        "sortAscending":  ": Ordenar ascendente",
        "sortDescending": ": Ordenar descendente"
    }
};

/*****************************************************************************/
/* Home: Event Handlers and Helpers */
/*****************************************************************************/
Session.set('slider_index',0);
Session.set('slider_top',3);
Template.home.events({
    'click #mLogin': function (event, tmp) {
        $('#modalLogin').modal('toggle');
    },
    'click .control-prev': function (event, tmp) {
        var sliderTop = Session.get('slider_top');
        var oldIndex = Session.get('slider_index');
        var index = oldIndex - 1;

        if(index < 0)
            index = sliderTop - 1;

        var newClass = 'background bg-' + index;
        $("#bg-slider").removeClass().addClass(newClass);
        Session.set('slider_index',index);

        $("#sliderTitle").text('');
        $("#sliderDesc").text('');
    },
    'click .control-next': function (event, tmp) {
        var sliderTop = Session.get('slider_top');
        var oldIndex = Session.get('slider_index');
        var index = oldIndex + 1;

        if(index == sliderTop)
            index = 0;

        var newClass = 'background bg-' + index;
        $("#bg-slider").removeClass().addClass(newClass);
        Session.set('slider_index',index);

        $("#sliderTitle").text('');
        $("#sliderDesc").text('');
    }
});

Template.home.helpers({
    /*
     * Example:
     *  items: function () {
     *    return Items.find();
     *  }
     */
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.home.created = function () {
};

Template.home.rendered = function () {

    $('#leagueTable').dataTable( {
        "data": dataSet,
        "lengthMenu": [[25, 50, 100], [25, 50, "TODOS"]],
        "columns": [
            { "title": "Posición" },
            { "title": "Equipo" },
            { "title": "Goles a favor", "class": "center" },
            { "title": "Goles en contra", "class": "center" },
            { "title": "Average", "class": "center" }
        ],
        "language":  options
    });

    $('#leagueScorers').dataTable( {
        "data": dataSet,
        "lengthMenu": [[25, 50, 100], [25, 50, "TODOS"]],
        "columns": [
            { "title": "Posición" },
            { "title": "Jugador" },
            { "title": "Posición" },
            { "title": "Goles", "class": "center" }
        ],
        "language":  options
    });
};

Template.home.destroyed = function () {
};
