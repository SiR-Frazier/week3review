import { Component } from '@angular/core';
import { Item } from '../item.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  items: Item[] = [
    new Item("SMOKESTACK LIGHTING", "HAVANA CLUB, TOWNSHEND'S SPICED TEA LIQUEUR, VANILLA, HONEY, LEMON, HOT", 9),
    new Item("96 TEARS","GINGER VODKA, LIME, SUGAR, BITTERS, GINGER BEER, PINT", 8),
    new Item("FROZEN PEACH-CINNAMON MARGARITA","BLANCO TEQUILA, PEACH NECTAR, LIME, ORANGE, CINNAMON SYRUP, TRIPLE SEC, FROZEN", 9),
    new Item ("THE PINK MOOSE","SPICY TEQUILA, FRESH LIME, GRAPEFRUIT, AGAVE, PEYCHAUD'S BITTERS, ROCKS", 8),
    new Item ("MANHATTAN ", "ELIJAH CRAIG 12 YR, SWEET VERMOUTH, ANGOSTURA BITTERS, UP ", 10),
    new Item ("PATSY'S COCKTAIL", "HENDRICK'S, SAINT GERMAIN, LEMON, PROSECCO, LAVENDER BITTERS ", 11),
    new Item ("LONG TIME LEAVING", "BRANDY, ALLSPICE DRAM, LEMON, ORANGE, HONEY, COTES DU RHONE, ROCKS ", 9),
    new Item ("SAZERAC", "OVERHOLT RYE, DEMERARA, HERBSAINT, PEYCHAUD'S, LEMON ZEST, UP", 9),
    new Item ("FATAL FRIENDSHIP", "TITO'S , PIMM'S, CUCUMBER SYRUP, LIME, SODA, ROCKS", 8),
    new Item ("OLD FASHIONED", "FOUR ROSES BOURBON, DEMERARA, BITTERS, BIG CUBE", 10),
    new Item ("OH DIANE", "CLEAR CREEK PEAR BRANDY & LIQUEUR, PROSSECCO, UP", 10),
  ];
  constructor() { }

}
