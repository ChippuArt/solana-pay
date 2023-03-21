import { NextPage } from 'next';
import React from 'react';
import useEffect from 'react;
import { BackButton } from '../buttons/BackButton';
import { TransactionsLink } from '../buttons/TransactionsLink';
import { PoweredBy } from '../sections/PoweredBy';
import { Progress } from '../sections/Progress';
import css from './ConfirmedPage.module.css';
import { useRouter } from 'next/router';


const ConfirmedPage: NextPage = () => {
    const router = useRouter();
    
    async function goback (e) {
        e.preventDefault();
        console.log("Clicked");
    }
    
    return (
        <div className={css.root}>
            <div className={css.header}>
                <BackButton onClick={goback}>Start Over</BackButton>
                <TransactionsLink />
            </div>
            <div className={css.main}>
                <Progress />
            </div>
            <div className={css.footer}>
                <PoweredBy />
            </div>
        </div>
    );
};

export default ConfirmedPage;
