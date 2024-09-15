type Person5 = {
    kind: 'person'
    name: string,
    salary: number
}

function createPerson(name: string, salary: number): Person5 {
    // return {name} as Person5; // не пишите приведение типов вручную
    let object: Person5 = {kind: 'person', name, salary}

    if (isPerson(object)) {
        return object;
    }

    return null!; // так не делать, только для примера
}

function isPerson(value: {kind: string}): value is Person5 {
    return value.kind === 'person'
}

// создание нового типа, на примере типа для получения данных с бекэнда
// type HttpResponse = {
//     status: 'pending' | 'successful' | 'failed' | 'cancelled';
//     data?: string[];
//     error?: string;
//     reason?: string;
// }

//лучше разбить на несколько типов с гарантированными данными, контракты
type HttpResponsePending = {
    status: 'pending'
};

type HttpResponseSuccessful = {
    status: 'successful',
    data: string[]
};

type HttpResponseFailed = {
    status: 'failed',
    error: string
};

type HttpResponseCancelled = {
    status: 'cancelled',
    reason: string
};

type HttpResponse = 
    | HttpResponsePending
    | HttpResponseSuccessful
    | HttpResponseFailed
    | HttpResponseCancelled;

function handleResponse(respons: HttpResponse): void {

    if (respons.status === 'pending') {
        respons.status;
    }
    if (respons.status === 'successful') {
        respons.data;
    }
    if (respons.status === 'failed') {
        respons.error;
    }
    if (respons.status === 'cancelled') {
        respons.reason;
    }
}