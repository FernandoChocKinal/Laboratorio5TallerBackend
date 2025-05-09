import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

const options ={
    swaggerDefinition:{
        openapi:"3.0.0",
        info:{
            title: "Blog de Aprendizaje API",
            version: "1.0.0",
            description: "API para el Blog de Aprendizaje",
            contact:{
                name: "Fernando Choc",
                email: "fchoc-2020619@kinal.edu.gt"
            }
        },
        servers:[
            {
                url: "http://127.0.0.1:3000/blogDeAprendizajeBackend/v1",
            }
        ]
    },
    apis:[
        "../src/publications/publication.routes.js",
    ]
}

const swaggerDocs = swaggerJSDoc(options)

export { swaggerDocs, swaggerUi}