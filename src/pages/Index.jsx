import React, { useEffect, useState } from 'react'
import NavBar from '../components/NavBar';
import {
    List,
    ListItem,
    ListIcon,
    OrderedList,
    UnorderedList,
} from '@chakra-ui/react'
import { Divider } from '@chakra-ui/react'
import { useLocation } from "react-router-dom";
import { Kbd } from '@chakra-ui/react'
import {
    RightOutlined,
    LeftOutlined
} from '@ant-design/icons';

const link = ' (<a target="_blank" href="https://development.victum-re.online/">Click aquí</a>).'

const data = {
    '/': {
        index: 0,
        title: 'Inicio',
        intro: '<Kbd>Victum REPSE</Kbd>'+link+' se dedica a eliminar barreras en el uso de <Kbd>plataformas</Kbd>. Con un equipo especializado, capacitaciones y relevamientos, buscamos mejorar la accesibilidad diaria.',
        'sub-title-1': '¿A qué nos referimos con AYUDA?',
        'sub-conte-1': 'El presente <Kbd>manual</Kbd> o ambiente nos da un <Kbd>desglose</Kbd> de como son los flujos de los procesos en cada uno de los módulos en Victum REPSE (es decir; asistencia, apoyo o colaboración). <br/><br/>También puede hacer referencia a información o recursos que facilitan la comprensión o resolución de problemas.',
        'sub-title-2': 'Estructura de cada proceso',
        'sub-descr-2': 'Buscamos identificar oportunidades de mejora y robustecer todos los procesos. Por ello, en cada proceso se <Kbd>estrucura</Kbd> por:',
        'sub-pros--2': [
            '<Kbd>Definición</Kbd> clave.',
            '<Kbd>Conceptos</Kbd> a tomar en cuenta en el proceso.',
            '<Kbd>Diagrama de flujo</Kbd> sobre el proceso y participación de cada rol involucrado.',
            '<Kbd>Manual (PDF)</Kbd>detallado: Incluye Glosario y un ejemplo con capturas de pantalla.'
        ],
        pagination: [
            {
                label: '',
                title: '',
                url: '',
                slide: '',
            },
            {
                label: 'Siguiente',
                title: 'Registro',
                url: '/register',
                slide: 'right',
                icon: <RightOutlined />
            }
        ]
    },
    '/register': {
        index: 1,
        title: 'Alta, Aprobación y Baja de Proveedores',
        label: 'Alta, Aprobación y Baja de Proveedores',
        intro: 'Facilitamos el acceso a nuestras plataformas con un equipo experto y capacitaciones. Agilizamos el <Kbd>alta</Kbd> y <Kbd>aprobación</Kbd> de proveedores para mejorar la experiencia de usuario.',
        'sub-title-1': '¿A quiénes y con qué propósito damos de alta a proveedores?',
        'sub-conte-1': 'Damos de alta a proveedores en un sistema para incorporar sus <Kbd>datos</Kbd> y <Kbd>servicios</Kbd>. <br/><br/>Este proceso sirve para gestionar y facilitar <Kbd>transacciones</Kbd>, mejorando la eficiencia y la relación con los proveedores.',
        'sub-title-2': 'Conceptos a tomar en cuenta',
        'sub-descr-2': 'Para que el proceso de Alta y aprobación de proveedores se pueda llevar acabo, es necesario tomar en cuenta los siguientes <Kbd>criterios</Kbd>:',
        'sub-pros--2': [
            'Por parte de los <Kbd>Proveedores</Kbd>: Tener conocimiento de como entrar a la plataforma'+link,
            'Por parte de los <Kbd>Proveedores</Kbd>: Conferir ciertos datos generales y documentos.',
            'Por parte de los <Kbd>Administradores</Kbd>: Verificar y validar con <Kbd>responsabilidad</Kbd> cada uno de los datos proporcionados por los proveedores.',
        ],
        'sub-title-3': 'Diagrama de flujo',
        'sub-descr-3': 'Un <Kbd>ejemplo</Kbd> del proceso de Alta y Aprobación de Proveedores, se <Kbd>visualiza</Kbd> y <Kbd>separa</Kbd> la participación de cada <Kbd>rol</Kbd> involucrado:',
        diagram: '/imgs/alta-de-proveedor.png',
        'sub-title-4': 'Manual (PDF)',
        'sub-descr-4': 'Incluye <Kbd>Glosario</Kbd> y un ejemplo con <Kbd>capturas de pantalla</Kbd>:',
        pagination: [
            {
                label: 'Anterior',
                title: 'Inicio',
                url: '/',
                slide: 'left',
                icon: <LeftOutlined />
            },
            {
                label: 'Siguiente',
                title: 'Nuevos accesos',
                url: '/access',
                slide: 'right',
                icon: <RightOutlined />
            }
        ]
    },
    '/access': {
        index: 2,
        title: 'Alta de nuevos accesos',
        label: 'Alta de nuevos accesos',
        intro: 'Agilizamos el alta de <Kbd>socios comerciales (proveedores)</Kbd> y <Kbd>administradores</Kbd> para mejorar la experiencia de usuario.',
        'sub-title-1': '¿A quiénes y con qué propósito damos de alta a proveedores?',
        'sub-conte-1': 'Damos de alta a socios comerciales (proveedores) y administradores el un sistema para incorporar sus <Kbd>datos</Kbd> y <Kbd>servicios</Kbd>. <br/><br/>Este proceso sirve para gestionar y facilitar <Kbd>transacciones</Kbd>, mejorando la eficiencia y la relación con los nuevos usuarios.',
        'sub-title-2': 'Conceptos a tomar en cuenta',
        'sub-descr-2': 'Para que el proceso de Alta de nuevos usuarios se pueda llevar acabo, es necesario tomar en cuenta los siguientes <Kbd>criterios</Kbd>:',
        'sub-pros--2': [
            'Por parte de los <Kbd>Administradores</Kbd>: Verificar y validar con <Kbd>responsabilidad</Kbd> cada uno de los datos proporcionados para cada uno de los nuevos usuarios.',
            'Por parte de los <Kbd>Proveedores</Kbd>: Tener conocimiento de como entrar a la plataforma'+link,
        ],
        'sub-title-3': 'Diagrama de flujo',
        'sub-descr-3': 'Un <Kbd>ejemplo</Kbd> del proceso de Alta de nuevos usuarios, se <Kbd>visualiza</Kbd> y <Kbd>separa</Kbd> la participación de cada <Kbd>rol</Kbd> involucrado:',
        diagram: '/imgs/nuevos-usuarios.png',
        'sub-title-4': 'Manual (PDF)',
        'sub-descr-4': 'Incluye <Kbd>Glosario</Kbd> y un ejemplo con <Kbd>capturas de pantalla</Kbd>:',
        pagination: [
            {
                label: 'Anterior',
                title: 'Registro',
                url: '/register',
                slide: 'left',
                icon: <LeftOutlined />
            },
            {
                label: 'Siguiente',
                title: 'Requisiciones',
                url: '/requisitions',
                slide: 'right',
                icon: <RightOutlined />
            }
        ]
    },
    '/requisitions': {
        index: 3,
        title: 'Proceso de las Requisiciones',
        label: 'Requisiciones',
        intro: '<Kbd>Gestionamos</Kbd> eficazmente las <Kbd>requisiciones</Kbd> y <Kbd>aprobaciones</Kbd> con Victum REPSE, simplificando las actividades de compras y brindando apoyo al personal involucrado.',
        'sub-title-1': '¿Qué son las Requisiciones?',
        'sub-conte-1': 'Autorización al Departamento de Compras con el fin de abastecer bienes o servicios. Ésta a su vez es originada y aprobada por el Departamento que requiere los bienes o servicios.',
        'sub-title-2': 'Conceptos a tomar en cuenta',
        'sub-descr-2': 'Para que el proceso de Requisiciones se pueda llevar acabo, es necesario tomar en cuenta los siguientes <Kbd>criterios</Kbd>:',
        'sub-pros--2': [
            'Al asignar un <Kbd>Proveedor</Kbd> y una <Kbd>Razón Social</Kbd> a una orden de compra, se esta asigando una <Kbd>responsabilidad</Kbd> a una tercera persona, por lo que se debe respetar un plazo en el proceso.',
            'Por parte de los <Kbd>Proveedores</Kbd>: Generar la cotización de las partidas, asumen una constancia del compromiso y conocimiento.',
        ],
        'sub-title-3': 'Diagrama de flujo',
        'sub-descr-3': 'Un <Kbd>ejemplo</Kbd> del proceso de las Requisiciones, se <Kbd>visualiza</Kbd> y <Kbd>separa</Kbd> la participación de cada <Kbd>rol</Kbd> involucrado:',
        diagram: '/imgs/requisiciones.png',
        'sub-title-4': 'Manual (PDF)',
        'sub-descr-4': 'Incluye <Kbd>Glosario</Kbd> y un ejemplo con <Kbd>capturas de pantalla</Kbd>:',
        'sub-downl-4': 'requisiciones',
        pagination: [
            {
                label: 'Anterior',
                title: 'Nuevos accesos',
                url: '/access',
                slide: 'left',
                icon: <LeftOutlined />
            },
            {
                label: 'Siguiente',
                title: ' Órdenes de Compra',
                url: '/orders',
                slide: 'right',
                icon: <RightOutlined />
            }
        ]
    },
    '/orders': {
        index: 4,
        title: 'Proceso de las Órdenes de Compra',
        label: 'Órdenes de Compra',
        intro: '<Kbd>Optimizamos</Kbd> el proceso de órdenes de compra, facilitando la gestión de compras con proveedores para garantizar eficacia y apoyo al personal involucrado.',
        'sub-title-1': '¿Qué son las Órdenes de Compra?',
        'sub-conte-1': 'Documento legal que envía el comprador a su proveedor. Deja constancia del compromiso que asume ese comprador de pagar los productos o servicios específicos que ofrece el vendedor.',
        'sub-title-2': 'Conceptos a tomar en cuenta',
        'sub-descr-2': 'Para que el proceso de Órdenes de Compra se pueda llevar acabo, es necesario tomar en cuenta los siguientes <Kbd>criterios</Kbd>:',
        'sub-pros--2': [
            'Al asignar un <Kbd>Proveedor</Kbd> y una <Kbd>Razón Social</Kbd> a una orden de compra, se esta asigando una <Kbd>responsabilidad</Kbd> a una tercera persona, por lo que es más cómodo brindarle un comprobante de pago.',
            'Al enviar facturas en <Kbd>XML</Kbd> y <Kbd>PDF</Kbd>, estas deben coincidir con el monto del sub-total de las partidas añadidas. Además de llamarse igual.',
            'El <Kbd>comprobante de pago</Kbd>, facturas en <Kbd>XML</Kbd> y <Kbd>PDF</Kbd>, asumen una constancia del compromiso y conocimiento.',
        ],
        'sub-title-3': 'Diagrama de flujo',
        'sub-descr-3': 'Un <Kbd>ejemplo</Kbd> del proceso de las Órdenes de Compra, se <Kbd>visualiza</Kbd> y <Kbd>separa</Kbd> la participación de cada <Kbd>rol</Kbd> involucrado:',
        diagram: '/imgs/ordenes-de-compra.png',
        'sub-title-4': 'Manual (PDF)',
        'sub-descr-4': 'Incluye <Kbd>Glosario</Kbd> y un ejemplo con <Kbd>capturas de pantalla</Kbd>:',
        'sub-downl-4': 'ordenes-de-compra',
        pagination: [
            {
                label: 'Anterior',
                title: 'Requisiciones',
                url: '/requisitions',
                slide: 'left',
                icon: <LeftOutlined />
            },
            {
                label: 'Siguiente',
                title: ' Entregas',
                url: '/deliveries',
                slide: 'right',
                icon: <RightOutlined />
            }
        ]
    },
    '/deliveries': {
        index: 4,
        title: 'Proceso de Entregas',
        label: 'Entregas',
        intro: '<Kbd>Optimizamos</Kbd> el proceso de entrega de mercancías, facilitando la gestión de recepción de productos con proveedores para garantizar eficacia y apoyo al personal involucrado.',
        'sub-title-1': '¿Qué son las Entregas?',
        'sub-conte-1': 'Las entregas son el proceso mediante el cual se recibe la mercancía solicitada en una orden de compra, asegurando que se cumplan las condiciones pactadas en cuanto a cantidad, calidad y tiempo de entrega.',
        'sub-title-2': 'Conceptos a tomar en cuenta',
        'sub-descr-2': 'Para que el proceso de Entregas se pueda llevar acabo, es necesario tomar en cuenta los siguientes <Kbd>criterios</Kbd>:',
        'sub-pros--2': [
            'Al recibir una <Kbd>entrega</Kbd>, es fundamental verificar que los productos coincidan con lo solicitado en la <Kbd>Orden de Compra (OC)</Kbd>.',
            'El sistema permite registrar <Kbd>evidencias fotográficas y documentos</Kbd> que validan la recepción y el estado de los productos.',
            'El <Kbd>Reporte Fotográfico y de Recepción de Mercancía</Kbd> garantiza un respaldo de la entrega, detallando las condiciones de los productos recibidos.',
        ],
        'sub-title-3': 'Diagrama de flujo',
        'sub-descr-3': 'Un <Kbd>ejemplo</Kbd> del proceso de Entregas, se <Kbd>visualiza</Kbd> y <Kbd>separa</Kbd> la participación de cada <Kbd>rol</Kbd> involucrado:',
        diagram: '/imgs/entregas.png',
        'sub-title-4': 'Manual (PDF)',
        'sub-descr-4': 'Incluye <Kbd>Glosario</Kbd> y un ejemplo con <Kbd>capturas de pantalla</Kbd>:',
        'sub-downl-4': 'entregas',
        pagination: [
            {
                label: 'Anterior',
                title: 'Órdenes de Compra',
                url: '/orders',
                slide: 'left',
                icon: <LeftOutlined />
            }
        ]
    },
}

const Index = () => {
    const location = useLocation();
    const { pathname } = location;

    return (
        <NavBar index={data[pathname]?.index}>
            {pathname === '/' &&
                <center>
                    <img
                        src={'https://images.ctfassets.net/p03bi75xct27/6Kn56xuigehLU4wBFdRYu6/0035cc36b77cd33ca3c537874b37f9db/Digitale-Personalakte_Software.png?q=80&fm=webp&w=2048'}
                        alt={'help'}
                        className="img-home"
                    />
                </center>
            }

            <h2>{data[pathname]?.title}</h2>
            <p>
                <div dangerouslySetInnerHTML={{ __html: data[pathname]?.intro }} />
            </p>
            <Divider />
            {[1, 2].map(item => (
                <>
                    <div className='pillar' />
                    <h3>{data[pathname][`sub-title-${item}`]}</h3>
                    <p>
                        <div dangerouslySetInnerHTML={{ __html: data[pathname][`sub-conte-${item}`] }} />
                    </p>
                </>
            ))}
            <UnorderedList spacing={0}>
                {data[pathname]['sub-pros--2'].map((item, index) => (
                    <ListItem key={`list-${pathname}-${index}`}>
                        <p><div dangerouslySetInnerHTML={{ __html: item }} /></p>
                    </ListItem>
                ))}
            </UnorderedList>
            {pathname !== '/' && <div className='pillar' />}

            <h3>{data[pathname]['sub-title-3']}</h3>
            <p>
                <div dangerouslySetInnerHTML={{ __html: data[pathname]['sub-descr-3'] }} />
            </p>
            <center>
                <img
                    src={data[pathname]?.diagram}
                    alt={data[pathname]?.diagram}
                    className="img"
                />
            </center>
            {data[pathname]['sub-downl-4'] &&
                <>
                    <h4>{data[pathname]['sub-title-4']}</h4>
                    <p>
                        <div dangerouslySetInnerHTML={{ __html: data[pathname]['sub-descr-4'] }} />
                    </p>
                    <a target="_blank" href={`/manuales-pdf/${data[pathname]['sub-downl-4']}.pdf`}>
                        <div className="andes-card">
                            <img width="40" height="40" decoding="async" src="https://www.seduvi.cdmx.gob.mx/storage/app/media/uploaded-files/pdf.png" alt="icon-pdf" />
                            Manual {data[pathname]?.label}.pdf
                        </div>
                    </a>
                </>
            }
            <Divider />
            <div style={{ display: 'flex', flexDirection: 'row', marginTop: 25, paddingBottom: 25, justifyContent: 'space-between' }}>
                {data[pathname]?.pagination.map((item, index) => (
                    <a href={`${item?.url}`} key={`${index}-${item?.title}`} style={{ display: 'flex', flexDirection: item?.slide === 'left' ? 'row' : 'row-reverse', gap: 5 }}>
                        {item?.icon}
                        <div style={{}}>
                            <h3 style={{ fontSize: 11, textAlign: item?.slide, color: 'gray', margin: '5px 0' }}>{item?.label}</h3>
                            <h4 style={{ textAlign: item?.slide }}>{item?.title}</h4>
                        </div>
                    </a>

                ))}
            </div>
            <div style={{ paddingBottom: 25 }}>
                <center>
                    <p style={{ fontSize: 12, fontStyle: 'italic' }}>
                        Desarrollado por <a target="_blank" href={`https://consultores-cti.com.mx/`}>Grupo CTI Tech-IN POS</a><br />© 2024 Grupo CTI Tech-IN POS. Todos los derechos reservados.
                    </p>
                </center>
            </div>

        </NavBar>
    );
};

export default Index;