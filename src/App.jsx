import { Routes, Route, NavLink } from 'react-router-dom';

import { Home } from './pages/Home';
import { Bookinger } from './pages/Bookinger';
import { Ny } from './pages/Ny';

function App() {
  return (
    <section className="bg-background w-screen h-screen relative">
      <div className="absolute inset-20 flex flex-col gap-1">
        <nav>
          <ul className="flex gap-5 items-center">
            <NavLink
              to="/ny"
              className={({ isActive }) =>
                `p-2 rounded-sm text-white shadow-xl ${isActive ? 'bg-black' : 'bg-highlight'}`
              }
            >
              Ny booking
            </NavLink>

            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `p-2 ${isActive ? 'bg-primary pb-5 rounded-t-md shadow-xl' : ''}`
                }
              >
                Fremside
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/bookinger"
                className={({ isActive }) =>
                  `p-2 ${isActive ? 'bg-primary pb-5  rounded-t-md shadow-xl' : ''}`
                }
              >
                Bookinger
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/oppfølginger"
                className={({ isActive }) =>
                  `p-2 ${isActive ? 'bg-primary pb-5  rounded-t-md shadow-xl' : ''}`
                }
              >
                Oppfølginger
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/tilbud"
                className={({ isActive }) =>
                  `p-2 ${isActive ? 'bg-primary pb-5  rounded-t-md shadow-xl' : ''}`
                }
              >
                Tilbud
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/salg"
                className={({ isActive }) =>
                  `p-2 ${isActive ? 'bg-primary pb-5  rounded-t-md shadow-xl' : ''}`
                }
              >
                Salg
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/avslått"
                className={({ isActive }) =>
                  `p-2 ${isActive ? 'bg-primary pb-5  rounded-t-md shadow-xl' : ''}`
                }
              >
                Avslått
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className="bg-primary w-full h-full rounded-sm shadow-xl p-5">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bookinger" element={<Bookinger />} />
            <Route path="/ny" element={<Ny />} />
            <Route path="/oppfølginger" element={<div>Oppfølginger</div>} />
            <Route path="/tilbud" element={<div>Tilbud</div>} />
            <Route path="/salg" element={<div>Salg</div>} />
            <Route path="/avslått" element={<div>Avslått</div>} />
          </Routes>
        </div>
      </div>
    </section>
  );
}

export default App;
