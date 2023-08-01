import * as admin from 'firebase-admin';

require('dotenv').config();

const firebaseApp = admin.initializeApp({
  credential: admin.credential.cert({
    projectId: process.env.FIREBASE_PROJECT_ID,
    privateKey: '-----BEGIN PRIVATE KEY-----\nMIIEvAIBADANBgkqhkiG9w0BAQEFAASCBKYwggSiAgEAAoIBAQD73nq0g0jZ1qK2\nDRUmafMu7jNNFK3JHOeyTZNomc+QTYIayi/n3fWhD8H+umY/7+qAFwW1J1EwasVQ\nshI1KZYTMxnDXommvvGIPBMUpvsM4V2vyhBSRCrIjeiufzleJ7OoCPIwvy5i6Z9S\nm9rDpJmJeJW+W4JKme2k/1B0E32IlRdnEB+ISLMxJPRenBbC5hpj+97bsRtyiZxW\njlWwvh4FlaB0KQr4QS4eOD4+fFz/+WHuwJsopzbsOouSbWdzYwVF8reNgA1GpppI\n7svYEiZ35VZ2QoTKDfhnJFEHAcTTDMz27+OdIlYlum7vqIUzZPwP1e/aKZemG7Jj\nuxsFSrwzAgMBAAECggEAer8jJ8PvhhJfO7/GdfEejdmScNdKFoAavr+lvk1vZZEQ\nfgPZMvPuGC84yO6IlFJVA1W092MQ4zq1rK0LyJLay8KUpKz3Aqd9yHoWhnMWWGGg\nqeIc8Cq+ev0Fz7y69ZL9sD+j4HPbpGLcvYKtK7mVBfUZbSrlpXu84DN5Pwicnimr\nPBNjaEtFyqoDTdI4kjknSLmqJlt9snfgnI+IIdNFA63EkLPKQ3IprJikfguObVR3\nE4mLwRkeKrhhWD7duajL3nh85+Rpq9iqwjXYAua0/K+MqGmrNVuBeC6xpquf4j7l\nUdQb/8r/pyAorVxZhymmxdEuaATiV+73/Ik9G+SFUQKBgQD+6yGui+hk98hOPXh4\nndJRMp920xipKJAvPketboPSEqaM9RJexUucTWBMbE2dDLH8SfnQ5EX3gMMUeGug\nSjZKj4Ip7P9W508aBbq66+oM/YYBmuNKB2PuDGbpQbdUJ6VDcw/xiN2SHYW2Yuhv\nSU5suVtRromFskRNshxLrfnJawKBgQD88AknA+/qJVNFdWAhRW/q373lsF29+kH8\n4qst6R5fayH8vL9MYezlZqus7qT8x3fexUHpFKht5tVdHG0Fy8jWtTfuJuR1QRTX\nU1E5UlBJ/cle8MEPHfPYtdcYfRZBlr4pagWmn8ZKAaakxZ5XmHN5OliAxtrX4BCv\n69NUMXqiWQKBgD23udjjoKlJYGKo+VDijPgBtJ/1LeROoNH/VyVDO4ER6Ob5sq/l\nPpAiH62BDy111GXLl0Me8V2h/Bkpqo0NSqW0pwP1kEB/EiSvvGzjDzCD9PzQfjT/\nIw+QSx4wPe2PB7ET24lT5KkqoqPswG+pJOan3dch1cPbzDOvarBb97zvAoGAVPVX\nTaiP5EjnQHRddq95GR5QDZ+AzTgLBCMqtkAQOKKmhtrrMn/N73vd/DcoadOiGsyN\nB/otXMTlM+JBaGn7qsqx36dmo0/Z7T2KEcPpPgElq2MYpbg82LSzbAFQAXXdp9F5\n1m7iTqdhTwUl22xUlQqZAaBJj6suT7jZgfUgqPkCgYAyMEtPI+hvZdgvYUza5rHb\nMYH+Mti5B0cgLEcci891J+X4wvfWX2vcgpQo9jEbbMEupSCYQtruLv5lLKCj+vi5\nwZ0haXtPIO4Q25axNIoBCBOkjj2ZkngwxLVHTVIyM4lHTkWFpoKBVbZ1HCMQuXP/\nwfnTiNluWy6+/L38c5uAew==\n-----END PRIVATE KEY-----\n',
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
