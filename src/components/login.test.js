import React from 'react'
import Enzyme, { shallow,mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { Login } from './login'                     //this component will be tested
import '../Login.css'




Enzyme.configure({ adapter: new Adapter() })

describe("checking component",()=>{
    let component = mount(<Login/>)

    it("Checking the presence of whole component",()=>{
        component.debug()
        console.log("\n\n\ttest result--> ",component.debug())
    })

    it("sdds",()=>{
        component.first()
    })
})