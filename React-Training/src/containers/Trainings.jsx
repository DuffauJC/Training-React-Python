import React, { useEffect, useState } from 'react'
import TrainingCard from '../composants/TrainingCard'
import { getAllTraining } from '../api/training'
import { getAllCategories } from '../api/category';


export default function Trainings() {

  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([])

  useEffect(() => {

    getAllTraining()
      .then((res) => {
        setItems(res.data)
      })
    getAllCategories().then((res) => {
      setCategories(res.data)
    })

  }, [setItems, setCategories])

  const trainingByCat = (cat) => {
    let trainingsByCat = cat.trainings
    setItems(trainingsByCat)
  }

  const refresh = () => {
    getAllTraining()
      .then((res) => {
        setItems(res.data)
      })
  }

  return (
    <div className="wrapper">
     
        <div className="catSelect">
          <img src="/img/refresh.png" alt="194x228" className='refresh_img' onClick={(e) => {
            e.preventDefault()
            refresh()
          }} />
          {categories?.map((cat) => {
            return (
              <div className="catCard" key={cat.id} onClick={(e) => {
                e.preventDefault()
                trainingByCat(cat)
              }}>
                <p>{cat.name}</p>
              </div>

            );
          })}
        </div>
        <div className="listTraining">
          {items?.map((itm) => {
            return <TrainingCard key={itm.id} item={itm} />;
          })}
        </div>
      </div>
  );
}
