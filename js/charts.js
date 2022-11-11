let chart100aleatorio = document
  .getElementById("chart100aleatorio")
  .getContext("2d")

let chart100ordenado = document
  .getElementById("chart100ordenado")
  .getContext("2d")

let chart100decre = document.getElementById("chart100decre").getContext("2d")

let chart1000aleatorio = document
  .getElementById("chart1000aleatorio")
  .getContext("2d")

let chart1000ordenado = document
  .getElementById("chart1000ordenado")
  .getContext("2d")

let chart1000decre = document.getElementById("chart1000decre").getContext("2d")

let chart10000aleatorio = document
  .getElementById("chart10000aleatorio")
  .getContext("2d")

let chart10000ordenado = document
  .getElementById("chart10000ordenado")
  .getContext("2d")

let chart10000decre = document
  .getElementById("chart10000decre")
  .getContext("2d")

let chart100000aleatorio = document
  .getElementById("chart100000aleatorio")
  .getContext("2d")

let chart100000ordenado = document
  .getElementById("chart100000ordenado")
  .getContext("2d")

let chart100000decre = document
  .getElementById("chart100000decre")
  .getContext("2d")

let chart1000000aleatorio = document
  .getElementById("chart1000000aleatorio")
  .getContext("2d")

let chart1000000order = document
  .getElementById("chart1000000order")
  .getContext("2d")

let chart1000000decre = document
  .getElementById("chart1000000decre")
  .getContext("2d")

let chart = new Chart(chart100aleatorio, {
  type: "bar",
  data: {
    labels: [
      "Insertion Sort",
      "Selection Sort",
      "Bubble Sort",
      "Shell Sort",
      "Merge Sort",
      "Quick Sorte",
    ],
    datasets: [
      {
        label: "Tempo (ms) de execução",
        backgroundColor: ["green", "red", "blue", "yellow", "orange", "pink"],
        borderColor: "black",
        data: [1.9, 2, 2.1, 2, 0.26, 0.3],
      },
    ],
  },
  options: {
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  },
})

let chart1 = new Chart(chart100ordenado, {
  type: "bar",
  data: {
    labels: [
      "Insertion Sort",
      "Selection Sort",
      "Bubble Sort",
      "Shell Sort",
      "Merge Sort",
      "Quick Sorte",
    ],
    datasets: [
      {
        label: "Tempo (ms) de execução",
        backgroundColor: ["green", "red", "blue", "yellow", "orange", "pink"],
        borderColor: "black",
        data: [1.8, 2, 1.9, 2, 0.24, 0.3],
      },
    ],
  },
  options: {
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  },
})

let chart2 = new Chart(chart100decre, {
  type: "bar",
  data: {
    labels: [
      "Insertion Sort",
      "Selection Sort",
      "Bubble Sort",
      "Shell Sort",
      "Merge Sort",
      "Quick Sorte",
    ],
    datasets: [
      {
        label: "Tempo (ms) de execução",
        backgroundColor: ["green", "red", "blue", "yellow", "orange", "pink"],
        borderColor: "black",
        data: [2.2, 2.4, 2.2, 2.2, 0.35, 0.32],
      },
    ],
  },
  options: {
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  },
})

let chart3 = new Chart(chart1000aleatorio, {
  type: "bar",
  data: {
    labels: [
      "Insertion Sort",
      "Selection Sort",
      "Bubble Sort",
      "Shell Sort",
      "Merge Sort",
      "Quick Sorte",
    ],
    datasets: [
      {
        label: "Tempo (ms) de execução",
        backgroundColor: ["green", "red", "blue", "yellow", "orange", "pink"],
        borderColor: "black",
        data: [4.4, 6, 5.4, 5.9, 4, 1],
      },
    ],
  },
  options: {
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  },
})

let chart4 = new Chart(chart1000ordenado, {
  type: "bar",
  data: {
    labels: [
      "Insertion Sort",
      "Selection Sort",
      "Bubble Sort",
      "Shell Sort",
      "Merge Sort",
      "Quick Sorte",
    ],
    datasets: [
      {
        label: "Tempo (ms) de execução",
        backgroundColor: ["green", "red", "blue", "yellow", "orange", "pink"],
        borderColor: "black",
        data: [2, 6.6, 1.9, 2.2, 2.5, 0.7],
      },
    ],
  },
  options: {
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  },
})

let chart5 = new Chart(chart1000decre, {
  type: "bar",
  data: {
    labels: [
      "Insertion Sort",
      "Selection Sort",
      "Bubble Sort",
      "Shell Sort",
      "Merge Sort",
      "Quick Sorte",
    ],
    datasets: [
      {
        label: "Tempo (ms) de execução",
        backgroundColor: ["green", "red", "blue", "yellow", "orange", "pink"],
        borderColor: "black",
        data: [4.7, 8, 5.6, 2.6, 3, 0.8],
      },
    ],
  },
  options: {
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  },
})

let chart6 = new Chart(chart10000aleatorio, {
  type: "bar",
  data: {
    labels: [
      "Insertion Sort",
      "Selection Sort",
      "Bubble Sort",
      "Shell Sort",
      "Merge Sort",
      "Quick Sorte",
    ],
    datasets: [
      {
        label: "Tempo (ms) de execução",
        backgroundColor: ["green", "red", "blue", "yellow", "orange", "pink"],
        borderColor: "black",
        data: [30, 50, 165, 10, 20, 5],
      },
    ],
  },
  options: {
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  },
})

let chart7 = new Chart(chart10000ordenado, {
  type: "bar",
  data: {
    labels: [
      "Insertion Sort",
      "Selection Sort",
      "Bubble Sort",
      "Shell Sort",
      "Merge Sort",
      "Quick Sorte",
    ],
    datasets: [
      {
        label: "Tempo (ms) de execução",
        backgroundColor: ["green", "red", "blue", "yellow", "orange", "pink"],
        borderColor: "black",
        data: [3.6, 47, 2.2, 7.2, 10, 3.4],
      },
    ],
  },
  options: {
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  },
})

let chart8 = new Chart(chart10000decre, {
  type: "bar",
  data: {
    labels: [
      "Insertion Sort",
      "Selection Sort",
      "Bubble Sort",
      "Shell Sort",
      "Merge Sort",
      "Quick Sorte",
    ],
    datasets: [
      {
        label: "Tempo (ms) de execução",
        backgroundColor: ["green", "red", "blue", "yellow", "orange", "pink"],
        borderColor: "black",
        data: [68, 115, 110, 11, 18, 4.1],
      },
    ],
  },
  options: {
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  },
})

let chart9 = new Chart(chart100000aleatorio, {
  type: "bar",
  data: {
    labels: [
      "Insertion Sort",
      "Selection Sort",
      "Bubble Sort",
      "Shell Sort",
      "Merge Sort",
      "Quick Sorte",
    ],
    datasets: [
      {
        label: "Tempo (ms) de execução",
        backgroundColor: ["green", "red", "blue", "yellow", "orange", "pink"],
        borderColor: "black",
        data: [23000, 182000, 165000, 42, 63000, 26.5],
      },
    ],
  },
  options: {
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  },
})

let chart10 = new Chart(chart100000ordenado, {
  type: "bar",
  data: {
    labels: [
      "Insertion Sort",
      "Selection Sort",
      "Bubble Sort",
      "Shell Sort",
      "Merge Sort",
      "Quick Sorte",
    ],
    datasets: [
      {
        label: "Tempo (ms) de execução",
        backgroundColor: ["green", "red", "blue", "yellow", "orange", "pink"],
        borderColor: "black",
        data: [4, 18000, 3.6, 15, 620, 17],
      },
    ],
  },
  options: {
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  },
})

let chart11 = new Chart(chart100000decre, {
  type: "bar",
  data: {
    labels: [
      "Insertion Sort",
      "Selection Sort",
      "Bubble Sort",
      "Shell Sort",
      "Merge Sort",
      "Quick Sorte",
    ],
    datasets: [
      {
        label: "Tempo (ms) de execução",
        backgroundColor: ["green", "red", "blue", "yellow", "orange", "pink"],
        borderColor: "black",
        data: [45000, 665000, 77000, 32, 625, 15],
      },
    ],
  },
  options: {
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  },
})

let chart12 = new Chart(chart1000000aleatorio, {
  type: "bar",
  data: {
    labels: [
      "Insertion Sort",
      "Selection Sort",
      "Bubble Sort",
      "Shell Sort",
      "Merge Sort",
      "Quick Sorte",
    ],
    datasets: [
      {
        label: "Tempo (ms) de execução",
        backgroundColor: ["green", "red", "blue", "yellow", "orange", "pink"],
        borderColor: "black",
        data: [250000, 400000, 300000, 284, 541200, 145],
      },
    ],
  },
  options: {
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  },
})

let chart13 = new Chart(chart1000000order, {
  type: "bar",
  data: {
    labels: [
      "Insertion Sort",
      "Selection Sort",
      "Bubble Sort",
      "Shell Sort",
      "Merge Sort",
      "Quick Sorte",
    ],
    datasets: [
      {
        label: "Tempo (ms) de execução",
        backgroundColor: ["green", "red", "blue", "yellow", "orange", "pink"],
        borderColor: "black",
        data: [7, 399000, 6.1, 90, 214200, 65],
      },
    ],
  },
  options: {
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  },
})

let chart14 = new Chart(chart1000000decre, {
  type: "bar",
  data: {
    labels: [
      "Insertion Sort",
      "Selection Sort",
      "Bubble Sort",
      "Shell Sort",
      "Merge Sort",
      "Quick Sorte",
    ],
    datasets: [
      {
        label: "Tempo (ms) de execução",
        backgroundColor: ["green", "red", "blue", "yellow", "orange", "pink"],
        borderColor: "black",
        data: [617000, 1200000, 600000, 120, 430800, 70],
      },
    ],
  },
  options: {
    animation: {
      duration: 1000,
      easing: "easeOutBounce",
    },
    layout: {
      padding: {
        left: 20,
        right: 20,
        top: 20,
        bottom: 20,
      },
    },
  },
})
