export default function Loading() {
  return (
    <div
      className="d-flex position-relative text-center justify-content-center flex-column gap-3 mt-5"
      style={{ top: "50%", left: "50%", translate: "-50% -50%" }}
    >
      <span className="loader align-self-center text-center"></span>
      <h1>Loading . . .</h1>
    </div>
  );
}
