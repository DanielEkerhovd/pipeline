export function Bookinger() {
  return (
    <div className="">
      <div className="flex items-center justify-between w-full mb-5">
        <h1>Bookinger</h1>
        <div>
          <input
            type="text"
            placeholder="Søk..."
            className="border border-gray-300 rounded-md p-2 w-full"
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      </div>
      <div className="grid grid-cols-6 gap-5 border-b-2 border-gray-600 w-full pb-1">
        <div className="">Bedrift</div>
        <div className="">Kontaktperson</div>
        <div className="">Tid for møte</div>
        <div className="">Status</div>
        <div className="">Kommentar</div>
        <div>Actions</div>
      </div>
      <div className="flex flex-col gap-3 divide-y-2 divide-gray-200">
        <div className="grid grid-cols-6 gap-5 items-center w-full py-1">
          <div className="">
            <p>Bedrift As</p>
          </div>
          <div className="">
            <p>Alf Alfesen</p>
          </div>
          <div className="">
            <p>12.05.25 | 13:00</p>
          </div>
          <div className="">
            <p>Booket</p>
          </div>
          <div className="">
            <p>
              Han er gira på å komme i gang med praten, kan være av interesse.
            </p>
          </div>
          <div className="flex justify-end gap-2">
            <button className="bg-blue-500 text-white p-2 rounded-md">
              Vis
            </button>
            <button className="bg-red-500 text-white p-2 rounded-md">
              Slett
            </button>
          </div>
        </div>
        <div className="grid grid-cols-6 gap-5  w-full py-1">
          <div className="">
            <p>Bedrift As</p>
          </div>
          <div className="">
            <p>Alf Alfesen</p>
          </div>
          <div className="">
            <p>12.05.25 | 13:00</p>
          </div>
          <div className="">
            <p>Booket</p>
          </div>
          <div className="">
            <p>
              Han er gira på å komme i gang med praten, kan være av interesse.
            </p>
          </div>
          <div className="flex justify-end gap-2">
            <button className="bg-blue-500 text-white p-2 rounded-md">
              Vis
            </button>
            <button className="bg-red-500 text-white p-2 rounded-md">
              Slett
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
