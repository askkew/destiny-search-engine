import React from 'react'
import { FilterButton, FilterCategory, FilterLabel, Filtercategorylabel, FiltersContainer } from './filterstyles'
import { damageTypes, itemConditions, itemClasses, itemType } from '../../utils'

const Filters = () => {
  return (
    <FiltersContainer>
      <Filtercategorylabel>Damage Type</Filtercategorylabel>
      <FilterCategory>
        {damageTypes.map((type, index) => {
          return  <FilterButton key={index}>
                    <img src={type.icon} height="25" style={{marginRight: '10px'}}/>
                    <FilterLabel>{type.name}</FilterLabel>
                  </FilterButton>
        })}
      </FilterCategory>
      <Filtercategorylabel>Item Rarity</Filtercategorylabel>
      <FilterCategory>
        {itemConditions.map((type, index) => {
          return  <FilterButton key={index}>
                    <FilterLabel style={{color: `${type.color}`}}>{type.name}</FilterLabel>
                  </FilterButton>
        })}
      </FilterCategory>
      <Filtercategorylabel>Class Type</Filtercategorylabel>
      <FilterCategory>
        {itemClasses.map((type, index) => {
          return  <FilterButton key={index}>
                    <img src={type.icon} height={type.iconsize} style={{marginRight: '10px'}}/>
                    <FilterLabel>{type.name}</FilterLabel>
                  </FilterButton>
        })}
      </FilterCategory>
      <Filtercategorylabel>Item Type</Filtercategorylabel>
      <FilterCategory>
        {itemType.map((type, index) => {
          return  <FilterButton key={index}>
                    <img src={type.icon} height={type.iconsize} style={{marginRight: '10px'}} alt=""/>
                    <FilterLabel>{type.name}</FilterLabel>
                  </FilterButton>
        })}
      </FilterCategory>
    </FiltersContainer>
  )
}

export default Filters