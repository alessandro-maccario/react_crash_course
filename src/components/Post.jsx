const names = ["Argon", "Mars"];

export default function Post() {
  const chosenName = Math.random() > 0.5 ? names[0] : names[1];

  return <main></main>;
}
