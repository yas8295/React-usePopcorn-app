export default function ErrorMessage({ errorMessage }) {
  return (
    <div className="d-flex justify-content-center flex-column gap-3 mt-5 align-self-center">
      <h1>{errorMessage}</h1>
    </div>
  );
}
