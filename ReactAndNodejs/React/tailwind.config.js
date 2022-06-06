module.exports = {
  content: ["./src/**/*.{html,jsx,js}"],
  theme: {
    extend: {
      spacing: {
        '1/10': '10%',
      },
      zIndex: {
        '1': '1',
      },
      transitionDuration: {
        '0': '0ms',
        '2000': '2000ms',
      },
      translate: {
        '1/1': "100%",
        '2/1': '200%',
        '3/1': '300%',
        '4/1': '400%',
        '5/1': '500%',
        '6/1': '600%',
        '7/1': '700%',
      },
      colors: {
        'regal-blue': '#243c5a',
        "yellow3": '#FDE047'
      },
    },
  },
  plugins: [
  ],
}
