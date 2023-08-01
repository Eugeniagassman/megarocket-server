import * as admin from 'firebase-admin';

require('dotenv').config();

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: '-----BEGIN PRIVATE KEY-----MIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQD73nq0g0jZ1qK2DRUmafMu7jNNFK3JHOeyTZNomc+QTYIayi/n3fWhD8H+umY/7+qAFwW1J1EwasVQshI1KZYTMxnDXommvvGIPBMUpvsM4V2vyhBSRCrIjeiufzleJ7OoCPIwvy5i6Z9Sm9rDpJmJeJW+W4JKme2k/1B0E32IlRdnEB+ISLMxJPRenBbC5hpj+97bsRtyiZxWjlWwvh4FlaB0KQr4QS4eOD4+fFz/+WHuwJsopzbsOouSbWdzYwVF8reNgA1GpppI7svYEiZ35VZ2QoTKDfhnJFEHAcTTDMz27+OdIlYlum7vqIUzZPwP1e/aKZemG7JjuxsFSrwzAgMBAAECggEAer8jJ8PvhhJfO7/GdfEejdmScNdKFoAavr+lvk1vZZEQfgPZMvPuGC84yO6IlFJVA1W092MQ4zq1rK0LyJLay8KUpKz3Aqd9yHoWhnMWWGGgqeIc8Cq+ev0Fz7y69ZL9sD+j4HPbpGLcvYKtK7mVBfUZbSrlpXu84DN5PwicnimrPBNjaEtFyqoDTdI4kjknSLmqJlt9snfgnI+IIdNFA63EkLPKQ3IprJikfguObVR3E4mLwRkeKrhhWD7duajL3nh85+Rpq9iqwjXYAua0/K+MqGmrNVuBeC6xpquf4j7lUdQb/8r/pyAorVxZhymmxdEuaATiV+73/Ik9G+SFUQKBgQD+6yGui+hk98hOPXh4ndJRMp920xipKJAvPketboPSEqaM9RJexUucTWBMbE2dDLH8SfnQ5EX3gMMUeGugSjZKj4Ip7P9W508aBbq66+oM/YYBmuNKB2PuDGbpQbdUJ6VDcw/xiN2SHYW2YuhvSU5suVtRromFskRNshxLrfnJawKBgQD88AknA+/qJVNFdWAhRW/q373lsF29+kH84qst6R5fayH8vL9MYezlZqus7qT8x3fexUHpFKht5tVdHG0Fy8jWtTfuJuR1QRTXU1E5UlBJ/cle8MEPHfPYtdcYfRZBlr4pagWmn8ZKAaakxZ5XmHN5OliAxtrX4BCv69NUMXqiWQKBgD23udjjoKlJYGKo+VDijPgBtJ/1LeROoNH/VyVDO4ER6Ob5sq/lPpAiH62BDy111GXLl0Me8V2h/Bkpqo0NSqW0pwP1kEB/EiSvvGzjDzCD9PzQfjT/Iw+QSx4wPe2PB7ET24lT5KkqoqPswG+pJOan3dch1cPbzDOvarBb97zvAoGAVPVXTaiP5EjnQHRddq95GR5QDZ+AzTgLBCMqtkAQOKKmhtrrMn/N73vd/DcoadOiGsyNB/otXMTlM+JBaGn7qsqx36dmo0/Z7T2KEcPpPgElq2MYpbg82LSzbAFQAXXdp9F51m7iTqdhTwUl22xUlQqZAaBJj6suT7jZgfUgqPkCgYAyMEtPI+hvZdgvYUza5rHbMYH+Mti5B0cgLEcci891J+X4wvfWX2vcgpQo9jEbbMEupSCYQtruLv5lLKCj+vi5wZ0haXtPIO4Q25axNIoBCBOkjj2ZkngwxLVHTVIyM4lHTkWFpoKBVbZ1HCMQuXP/wfnTiNluWy6+/L38c5uAew==-----END PRIVATE KEY-----',
    clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
    type: process.env.FIREBASE_TYPE,
    privateKeyID: process.env.FIREBASE_PRIVATE_KEY_ID,
    clientID: process.env.FIREBASE_CLIENT_ID,
    authUri: process.env.FIREBASE_AUTH_URI,
    tokenUri: process.env.FIREBASE_TOKEN_URI,
    authProviderX509CertUrl: process.env.FIREBASE_AUTH_PROVIDER_X509_CERT_URL,
    clientX509CertUrl: process.env.FIREBASE_CLIENT_X509_CERT_URL,
    universeDomain: process.env.FIREBASE_UNIVERSE_DOMAIN,
  }),
});

export default firebaseApp;
