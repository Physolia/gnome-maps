/* -*- Mode: JS2; indent-tabs-mode: nil; js2-basic-offset: 4 -*- */
/* vim: set et ts=4 sw=4: */
/*
 * Copyright (c) 2011, 2012, 2013 Red Hat, Inc.
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
 * Author: Zeeshan Ali (Khattak) <zeeshanak@gnome.org>
 *         Mattias Bengtsson <mattias.jc.bengtsson@gmail.com>
 */

import GObject from 'gi://GObject';
import Gtk from 'gi://Gtk';
import * as Utils from './utils.js';

export class InstructionRow extends Gtk.ListBoxRow {

    constructor({turnPoint, lines, ...params}) {
        super(params);

        this.turnPoint = turnPoint;

        if (lines)
            this._instructionLabel.lines = lines;

        this._instructionLabel.label = this.turnPoint.instruction;
        this._directionImage.icon_name = this.turnPoint.iconName;

        if (this.turnPoint.distance > 0)
            this._distanceLabel.label = Utils.prettyDistance(this.turnPoint.distance);
    }
}

GObject.registerClass({
    Template: 'resource:///org/gnome/Maps/ui/instruction-row.ui',
    InternalChildren: [ 'directionImage',
                        'instructionLabel',
                        'distanceLabel' ]
}, InstructionRow);
