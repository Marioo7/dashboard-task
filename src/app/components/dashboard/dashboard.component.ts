import {
  AfterViewInit,
  Component,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
declare var Chart: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements AfterViewInit {
  selected = 'one';

  toggleSelection(selection: string) {
    this.selected = selection;
    if (this.selected === 'one') {
      setTimeout(() => {
        this.createBarChart();
      });
    }
  }

  ngAfterViewInit(): void {
    if (this.selected === 'one') {
      this.createBarChart();
    }
  }

  createBarChart(): void {
    const colors = ['#FF7F5C'];
    const chartData = {
      labels: [
        'Station Name Dummy 1',
        'Station Name Dummy 2',
        'Station Name Dummy 3',
        'Station Name Dummy 4',
        'Station Name Dummy 5',
      ],
      datasets: [
        {
          data: [255, 140, 195, 240, 145],
          backgroundColor: colors[0],
          barThickness: 11,
        },
      ],
    };

    const chartOptions = {
      scales: {
        x: {
          barPercentage: 0.4,
          categoryPercentage: 0.5,
          ticks: {
            font: {
              size: 10,
              family: 'Arial',
              weight: 'bold',
              color: '#3D5161',
            },
          },
        },
        y: {
          beginAtZero: false,
          min: 50,
          max: 300,
          ticks: {
            stepSize: 50,
            callback: function (value: number) {
              if (value === 50) {
                return '';
              }
              return value;
            },
            font: {
              size: 12,
              family: 'Arial',
              weight: 'bold',
              color: '#3D5161',
            },
          },
        },
      },
      plugins: {
        legend: { display: false },
      },
    };

    const barChartCanvas = document.getElementById(
      'chBar'
    ) as HTMLCanvasElement;
    if (barChartCanvas) {
      new Chart(barChartCanvas, {
        type: 'bar',
        data: chartData,
        options: chartOptions,
      });
    }
  }
}
