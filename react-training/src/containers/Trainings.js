import React, { useEffect, useState } from 'react'
import TrainingCard from '../composants/TrainingCard'

import { useRecoilState } from "recoil"
import { trainingList, categoriesList } from '../store/atoms'
import { getAllTraining } from '../api/training'
import { getAllCategories } from '../api/category';

export default function Trainings() {
  const [items, setItems] = useState([]);
  const [categories, setCategories] = useState([])

  const [trainings, setTrainings] = useRecoilState(trainingList)
  const [cat, setCat] = useRecoilState(categoriesList)

  useEffect(() => {
    // si les produits ne sont pas chargé dans le store on les charge
    if (trainings.length === 0) {
      //appel de la fonction
      getAllTraining().then((res) => {
        //setItems(res.data)
        setTrainings(res.data)
      })
    }
    if (cat.length === 0) {
      //appel de la fonction dans l'action
      getAllCategories().then((res) => {
        //setCategories(res.data)
        setCat(res.data)
      })
    }
    setItems(trainings)
    setCategories(cat)
  }, [trainings, cat])

  const trainingByCat = (cat) => {
    let trainingsByCat = cat.trainings
    setItems(trainingsByCat)
  }

  const refresh = () => {
    setItems(trainings)
  }

  return (
    <div className="wrapper">
      <div className="catSelect" id='hautdepage'>
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
      <a href="#hautdepage" className='retour_haut'><img className='arrow-up' src="/img/up-arrow.png" alt="" /></a>
    </div>
  );
}
