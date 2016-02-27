
import React from 'react'
import TestUtils from 'react-addons-test-utils'
import expect from 'expect'
import { Arrow } from '../src'

const renderer = TestUtils.createRenderer()

describe('Arrow', () => {

  let tree
  beforeEach(() => {
    renderer.render(<Arrow />)
    tree = renderer.getRenderOutput()
  })

  it('should render', () => {
    expect(tree.type).toEqual('div')
  })

  it('should have a className', () => {
    expect(tree.props.className).toEqual('Arrow')
  })

  it('should have a border top by default', () => {
    expect(tree.props.style.borderTop).toEqual('.4375em solid')
  })

  it('should not have a border bottom by default', () => {
    expect(tree.props.style.borderBottom).toNotExist()
  })

  context('when direction prop is up', () => {
    beforeEach(() => {
      renderer.render(<Arrow direction='up' />)
      tree = renderer.getRenderOutput()
    })

    it('should have a border bottom', () => {
      expect(tree.props.style.borderBottom).toEqual('.4375em solid')
    })

    it('should not have a border top', () => {
      expect(tree.props.style.borderTop).toNotExist()
    })
  })

  context('when custom styles are set', () => {
    beforeEach(() => {
      renderer.render(<Arrow style={{ color: 'tomato' }} />)
      tree = renderer.getRenderOutput()
    })

    it('should have a custom color', () => {
      expect(tree.props.style.color).toEqual('tomato')
    })
  })
})

