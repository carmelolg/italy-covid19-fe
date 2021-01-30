import { Injectable } from '@angular/core';

import { Chart } from '../shared/model/Chart';


declare var require: any
require('chartist-plugin-tooltips-updated');
import * as Chartist from 'chartist';
import { Subject } from 'rxjs';
import { ChartType } from 'ng-chartist';


export interface ChartOptions {
  labels: any[],
  prefixLabel?: string,
  allLabelsVisible?: boolean,
  type: ChartType
}

@Injectable({
  providedIn: 'root'
})
export class ChartService {

  private updateChartModelSubject = new Subject<string>();
  public updateChartModel$ = this.updateChartModelSubject.asObservable();

  constructor() { }

  // Service message commands
  updateChartModel() {
    this.updateChartModelSubject.next();
  }

  public createChart(_labels, chartType?, ...values): Chart {
    const options: ChartOptions = {
      labels: _labels,
      prefixLabel: 'Data: ',
      type: chartType || 'Line'
    };

    return this.generateChart(options, ...values);
  }

  public generateChart(options: ChartOptions, ...values): Chart {

    let _series = [];

    const _prefixLabel: string = options.prefixLabel ? options.prefixLabel : 'Data: ';

    if (values !== null && values !== undefined) {

      values.forEach(function (array) {
        if (array !== null && array !== undefined && array.length > 0) {
          array = array.map(function (v, idx) { return { meta: _prefixLabel + options.labels[idx], value: v }; });
          _series.push({ data: array });
        }
      });
    }

    return {
      type: options.type || 'Line',
      data: {
        labels: options.labels,
        series: _series
      },
      options: {
        seriesDistance: 25,
        seriesBarDistance: -5,
        height: 300,
        plugins: [
          Chartist.plugins.tooltip({
            appendToBody: false,
            className: "ct-tooltip",
            transformTooltipTextFnc: function (value) {
              return value;

            }
          })
        ],
        axisX: {
          labelInterpolationFnc: function (
            value: number
          ): string {
            return value.toString();
          }
        },
        axisY: {
          labelInterpolationFnc: function (
            value: number
          ): string {
            return Math.abs(value) > 999 ? Math.sign(value) * ((Math.abs(value) / 1000)) + 'k' : (Math.sign(value) * Math.abs(value)).toFixed(1);
          }
        },
      },
      responsiveOptions: [
        [
          'screen and (max-width: 360px)',
          this.generateResponsiveOptions(options.allLabelsVisible ? 1 : 10)
        ],
        [
          'screen and (min-width: 361px) and (max-width: 490px)',
          this.generateResponsiveOptions(options.allLabelsVisible ? 1 : 6)
        ],
        [
          'screen and (min-width: 491px) and (max-width: 570px)',
          this.generateResponsiveOptions(options.allLabelsVisible ? 1 : 5)
        ],
        [
          'screen and (min-width: 570px) and (max-width: 1024px)',
          this.generateResponsiveOptions(options.allLabelsVisible ? 1 : 3)
        ],
        [
          'screen and (min-width: 1025px) and (max-width: 1550px)',
          this.generateResponsiveOptions(options.allLabelsVisible ? 1 : 2)
        ],
        [
          'screen and (max-height: 600px)',
          {
            height: 200
          }
        ]
      ],
      events: {}
    };
  }

  public generateResponsiveOptions(xValueMod: number) {

    return {
      axisY: {
        labelInterpolationFnc: function (
          value: number
        ): string {
          return Math.abs(value) > 999 ? Math.sign(value) * ((Math.abs(value) / 1000)) + 'k' : (Math.sign(value) * Math.abs(value)).toFixed(1);
        }
      },
      axisX: {
        labelInterpolationFnc: function (
          value: number,
          index: number
        ): string {
          return index % xValueMod === 0 ? `${value}` : null;
        }
      }
    }
  }
}
