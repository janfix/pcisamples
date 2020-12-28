

/*
 Build by Wiquid's PCI Generator for TAO platform Free to use 
 */

define([
    'taoQtiItem/qtiCreator/widgets/interactions/customInteraction/Widget',
    'mypci/creator/widget/states/states'
], function(Widget, states){
    'use strict';

    var mypciWidget = Widget.clone();

     mypciWidget.initCreator = function(){
        
        this.registerStates(states);
        
        Widget.initCreator.call(this);
    };
    
    return mypciWidget;
});
