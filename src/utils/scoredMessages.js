class ScoredMessages {
  static messages = [
    {
      min: 0,
      max: 3,
      message:
        "Gullible: You need to work on your ability to identify fake websites.",
      styles: {
        color: "white",
        backgroundColor: "tomato",
      },
    },
    {
      min: 4,
      max: 6,
      message:
        "Satisfactory: You have a decent ability to identify fake websites, but there is still room for improvement.",
      styles: {
        color: "black",
        backgroundColor: "#ffc107",
      },
    },
    {
      min: 7,
      max: 10,
      message:
        "Keep your guard up: Great job! You have a strong ability to identify fake websites.",
      styles: {
        color: "white",
        backgroundColor: "#198754",
      },
    },
  ];

  static getMessage(score) {
    for (let range of this.messages) {
      if (score >= range.min && score <= range.max) {
        return range;
      }
    }
    return "Invalid Score";
  }
}

export default ScoredMessages;
