import { Progress, Container } from "@chakra-ui/react"

import React, { Component } from 'react'

export default class ProgressBar extends Component {
    render() {
        return (

            <Progress colorScheme="green" size="sm" value={80} />

        )
    }
}
