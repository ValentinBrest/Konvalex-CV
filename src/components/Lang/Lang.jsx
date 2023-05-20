import React from 'react';
import './Lang.css';
import { Title } from '../Title/Title';

export const Lang = () => {
  return (
    <div class="main__lang">
        <Title>Languages</Title>
                <div class="container__left">
                    <div class="main__lang-box">
                        <span>English - Intermediate (B1)</span>
                        <div class="main__lang-circle">
                            <div class="circle active"></div>
                            <div class="circle active"></div>
                            <div class="circle active"></div>
                            <div class="circle"></div>
                            <div class="circle"></div>
                        </div>
                    </div>
                </div>
            </div>
    
  )
}
