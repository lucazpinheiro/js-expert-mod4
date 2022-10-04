import mocha from 'mocha'
const { describe, it } = mocha
import chai, { assert } from 'chai'
const { expect } = chai
import Person from '../src/person.js'

describe('Person', () => {
  it('should return a person instance from a string', () => {
    const person = Person.generateInstanceFromString(
      '1 Bike,Aviao,Navio 200000 2000-01-01 2003-04-01'
    )
    const expected = {
      from: '2000-01-01',
      to: '2003-04-01',
      vehicles: ['Bike', 'Aviao', 'Navio'],
      kmTraveled: '200000',
      id: '1'
    }
    expect(person).to.be.deep.equal(expected)
  })
  it('should format values', () => {
    const person = new Person({
      from: '2000-01-01',
      to: '2003-04-01',
      vehicles: ['Bike', 'Aviao', 'Navio'],
      kmTraveled: '200000',
      id: '1'
    })
    const result = person.formatted('pt-BR')
    const expected = {
      id: 1,
      vehicles: 'Bike, Aviao e Navio',
      kmTraveled: '200.000 km',
      from: '2000 (dia: 01)',
      to: '2003 (dia: 01)'
    }
    expect(result).to.be.deep.equal(expected)
  })
})