import React from 'react'
import { FilterButton, FilterCategory, FilterLabel, FiltersContainer } from './filterstyles'
import { damageTypes, itemConditions, itemClasses } from '../../utils'

const Filters = () => {
  return (
    <FiltersContainer>
      <h1>Filters</h1>
      <h1>Damage Type</h1>
      <FilterCategory>
        {damageTypes.map((type, index) => {
          return  <FilterButton key={index}>
                    <img src={type.icon} height="25" style={{marginRight: '10px'}}/>
                    <FilterLabel>{type.name}</FilterLabel>
                  </FilterButton>
        })}
      </FilterCategory>
      <h1>Item Rarity</h1>
      <FilterCategory>
        {itemConditions.map((type, index) => {
          return  <FilterButton key={index}>
                    <FilterLabel style={{color: `${type.color}`}}>{type.name}</FilterLabel>
                  </FilterButton>
        })}
      </FilterCategory>
      <h1>Class Type</h1>
      <FilterCategory>
        {itemClasses.map((type, index) => {
          return  <FilterButton key={index}>
                    <img src={type.icon} height={type.iconsize} style={{marginRight: '10px'}}/>
                    <FilterLabel>{type.name}</FilterLabel>
                  </FilterButton>
        })}
      </FilterCategory>
    </FiltersContainer>
  )
}

export default Filters