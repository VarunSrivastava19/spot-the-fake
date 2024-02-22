class ScoredMessages {
  static messages = [
    {
      min: 0,
      max: 3,
      message:
        "Gullible: You need to work on your ability to identify fake websites. Cybersecurity is a crucial skill in the digital age, and being able to distinguish between real and fake websites can help protect you from scams and phishing attacks.",
      styles: {
        color: "white",
        backgroundColor: "tomato",
      },
    },
    {
      min: 4,
      max: 6,
      message:
        "Satisfactory: You have a decent ability to identify fake websites, but there is still room for improvement. Keep learning and practicing to enhance your cybersecurity skills.",
      styles: {
        color: "black",
        backgroundColor: "#ffc107",
      },
    },
    {
      min: 7,
      max: 10,
      message:
        "Keep your guard up: Great job! You have a strong ability to identify fake websites. However, cyber threats are always evolving, so it's important to stay vigilant and keep your cybersecurity knowledge up-to-date.",
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
