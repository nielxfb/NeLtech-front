function ConnectionError() {
  return (
    <div className="flex flex-col justify-center items-center h-full w-full gap-3">
      <h1 className="text-4xl font-bold text-blue-700">Connection Error</h1>
      <p className="text-2xl font-semibold text-slate-700">
        Please check your internet connection and try again
      </p>
    </div>
  );
}

export default ConnectionError;
