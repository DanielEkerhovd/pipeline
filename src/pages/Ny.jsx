export function Ny() {
  return (
    <div className="h-full w-full">
      <h1 className="mb-5">Ny kunde</h1>
      <form className="flex justify-between gap-10" action="">
        <div className=" w-full h-full flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <label className="font-heading text-lg" htmlFor="firma">
              Firma
            </label>
            <input
              type="text"
              name="firma"
              id="firma"
              className="bg-background border-[1px] rounded-sm p-2 border-gray-200 font-sans text-md font-light w-2/3"
              placeholder="Firma"
            />
          </div>
          <div className="flex flex-col gap-2">
            <h2 className="text-lg">Kontaktperson</h2>
            <div className="flex flex-col gap-1">
              <label className="font-heading text-sm font-light" htmlFor="navn">
                Navn
              </label>
              <input
                type="text"
                name="navn"
                id="navn"
                className="bg-background border-[1px] rounded-sm p-2 border-gray-200 font-sans text-md font-light w-2/3"
                placeholder="Navn"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-heading text-sm" htmlFor="tittel">
                Tittel
              </label>
              <input
                type="text"
                name="tittel"
                id="tittel"
                className="bg-background border-[1px] rounded-sm p-2 border-gray-200 font-sans text-md font-light w-2/3"
                placeholder="f.eks. Daglig leder"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="font-heading text-sm" htmlFor="epost">
                E-post
              </label>
              <input
                type="email"
                name="epost"
                id="epost"
                className="bg-background border-[1px] rounded-sm p-2 border-gray-200 font-sans text-md font-light w-2/3"
                placeholder="E-post"
              />
            </div>
            <div className="flex flex-col gap-1">
              <label className="font-heading text-sm" htmlFor="telefon">
                Telefon
              </label>
              <input
                type="tel"
                name="telefon"
                id="telefon"
                className="bg-background border-[1px] rounded-sm p-2 border-gray-200 font-sans text-md font-light w-2/3"
                placeholder="Telefon"
              />
            </div>
          </div>
        </div>
        <div className="bg-blue-200 w-full h-full">test</div>
      </form>
    </div>
  );
}
