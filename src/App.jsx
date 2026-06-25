import { useState } from 'react'
import Header from './components/Header'
import Nav from './components/Nav'
import Figure from './components/Figure'

import './App.css'


const works = [
  {
    id: 1,
    title: "work 1",
    url: "images/img-1.jpg",
    desc: "Work 1 description"
  },
  { id: 2,
    title: "work 2",
    url: "images/img-2.jpg",
    desc: "Work 2 description"
  },
  { id: 3,
    title: "work 3",
    url: "images/img-3.jpg",
    desc: "Work 3 description"
  },
  { id: 4,
    title: "work 4",
    url: "images/img-4.jpg",
    desc: "Work 4 description"
  },
  { id: 5,
    title: "work 5",
    url: "images/img-5.jpg",
    desc: "Work 5 description"
  },
  { id: 6,
    title: "work 6",
    url: "images/img-6.jpg",
    desc: "Work 6 description"
  },
  { id: 7,
    title: "work 7",
    url: "images/img-7.jpg",
    desc: "Work 7 description"
  },
  { id: 8,
    title: "work 8",
    url: "images/img-8.jpg",
    desc: "Work 8 description"
  },

];


function App() {
  const [id, setId] = useState(1);
  const work = works.find((w) => w.id === id)
  return(
    <>
      <Header />
      <Nav data={works} curId={id} onChangeMode={(id)=> setId(id)} />
      {work && <Figure data={work}
      onPrev={() => {
        if(id > 1){
          setId(id-1);
        }
      }
      } onNext={() => {
        if(id < works.length){
          setId(id+1);
        }
      }
      }/>}
    </>
  )
}

export default App
