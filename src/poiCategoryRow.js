/* -*- Mode: JS2; indent-tabs-mode: nil; js2-basic-offset: 4 -*- */
/* vim: set et ts=4 sw=4: */
/*
 * Copyright (c) 2023 Marcus Lundblad.
 *
 * GNOME Maps is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by the
 * Free Software Foundation; either version 2 of the License, or (at your
 * option) any later version.
 *
 * GNOME Maps is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY
 * or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU General Public License
 * for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with GNOME Maps; if not, see <http://www.gnu.org/licenses/>.
 *
 * Author: Marcus Lundblad <ml@dfupdate.se>
 */

import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';

import gettext from 'gettext';

export class PoiCategoryRow extends Gtk.ListBoxRow {
  constructor({ iconName, label, ...params }) {
    super(params);

    this._icon.icon_name = iconName;
    this._label.label = gettext.gettext(label);
  }
};

GObject.registerClass({
    Template: 'resource:///org/gnome/Maps/ui/poi-category-row.ui',
    InternalChildren: [ 'icon',
                        'label' ],
}, PoiCategoryRow);
