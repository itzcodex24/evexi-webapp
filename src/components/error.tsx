export default function Error({ text }: { text: string }) {
  return (
    <div className="error-screen">
      <div className="error-content">
        <h1>{text}</h1>
      </div>
    </div>
  );
}
