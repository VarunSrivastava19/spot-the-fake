export default function randomize() {
  const order = ["real", "fake"];
  return Math.random() > 0.5 ? [...order.reverse()] : order;
}
