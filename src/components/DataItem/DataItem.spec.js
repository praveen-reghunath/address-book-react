
import React from 'react';
import { mount } from 'enzyme';

import DataItem from './DataItem';

describe('DataItem Component', () => {

    const defaultProps = {}

    it('renders without crashing', () => {
        const wrapper = mount(<DataItem {...defaultProps} />);
        expect(wrapper.length === 1).toBe(true);
        wrapper.unmount();
    });

    it('shows the field title', () => {
        const wrapper = mount(<DataItem {...defaultProps} />);
        expect(wrapper.find('.name').length).toBe(1);
        wrapper.unmount();
    });

    it('shows the field value', () => {
        const wrapper = mount(<DataItem {...defaultProps} />);
        expect(wrapper.find('.value').length).toBe(1);
        wrapper.unmount();
    });
});
