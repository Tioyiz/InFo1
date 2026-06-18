import {useState, useEffect, useMemo }  from 'react'

export function useCounter({date}:{date:Number}){
  
  const [second, setSeconds] = useState<String>("")
  const [minute, setMinutes] = useState<String>("")
  const [hour, setHours] = useState<String>("")
  const [day, setDay] = useState<String>("")
  
  const seconds = 1000
  const minutes = seconds * 60
  const hours = minutes * 60
  const days = hours * 24
  
  function updateTime(){
    const now = Date.now()
    const diff = Number(date) - now
    
    setSeconds(Math.floor((diff % minutes) / seconds).toString().padStart(2,'0'))
    
    setMinutes(Math.floor((diff % hours) / minutes).toString().padStart(2,'0'))
    
    setHours(Math.floor((diff % days) / hours).toString().padStart(2,'0')) 
    
    setDay(Math.floor((diff / days) ).toString()) 
  }
  
  const counter = useMemo(() =>{
    return `Faltan ${day}days ${hour}h ${minute}min ${second}sg `
 }, [day, hour, minute, second]) 
  
  useEffect(() =>{
    const interval = setInterval(updateTime, 1000)
    
    return  () => clearInterval(interval)
  }, [])
  
  return {counter}
}