import { withLocales } from 'nextra/locales'
import { NextResponse } from 'next/server';

export const middleware = withLocales((request) => {
    return NextResponse.next();
});
