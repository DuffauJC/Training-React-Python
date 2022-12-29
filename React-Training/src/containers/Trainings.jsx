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
        <div className="container">
            <img src="/img/refresh.png" alt="194x228" className='refresh_img' onClick={(e) => {
                e.preventDefault()
                refresh()
            }} />
        <div className="catSelect d-flex">
          {categories?.map((cat) => {
            return (
                <div className="cityCard" key={cat.id} onClick={(e) => {
                    e.preventDefault()
                    trainingByCat(cat)
                }}>
                <h4>{cat.name}</h4>
                <p> {cat.trainings.length} </p>
              </div>
            );
          })}
        </div>
        <div className="md-6 d-flex flex-wrap listAdmin">
          {items?.map((itm) => {
            return <TrainingCard key={itm.id} item={itm} />;
          })}
        </div>
      </div>
    );
}
