import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { supabase, uno } from '../utils/supabase';
import { Timeline, Button, } from 'antd';
import { Stack } from '@chakra-ui/react';

const OrderWork = ({ }) => {

    const { id } = useParams();
    const itemId = id / uno;
    const [item, setItem] = useState(null)
    const [status, setStatus] = useState([])
    const [loader, setloader] = useState(false)

    useEffect(() => {
        getData()
    }, [itemId])

    useEffect(() => {
        if (item?.id) getStatus(item?.company_id)
    }, [item])

    async function getStatus(company_id) {
        const { data, error } = await supabase.rpc('_get_status_ordered_by_id', { _company_id_: company_id });
        if (error) return;
        if (data.length > 0) {
            const status_ = (data || []).map(item__ => {
                let color = 'gray';
                if (item__?.id == item?.status) color = 'blue';
                return {
                    color: color,
                    children: item__?.name,
                };
            });
            setStatus(status_)
        }
    }

    const getData = async () => {
        try {
            let { data, error } = await supabase.from('travel').select("*").eq('id', itemId);
            if (error) {
                setloader(false)
                return 0;
            }
            setItem(data[0])
            setloader(true)
        } catch (error) {
            console.log("🚀 ~ getData ~ error:", error)
        }

    }

    const upStatusOne = async (id) => {
        const { data, error } = await supabase.from('travel').update({ status: id }).eq('id', itemId).select()
        setItem({ ...item, status: id })
    }

    if (!loader) {
        return (
            <Stack gap={5} p={10}>
                <h1>Cargando...</h1>
            </Stack>
        )
    } else {
        return (
            <Stack gap={5} p={10}>
                <h1>Orden de trabajo OT-{itemId}</h1>
                <Timeline items={status} />
                <Button type="primary" onClick={() => upStatusOne(2)} disabled={item?.status > 1}>Iniciar viaje</Button>
                <Button type="primary" onClick={() => upStatusOne(3)} disabled={item?.status == 1 || item?.status > 2}>Terminar viaje</Button>
            </Stack>
        )
    }
};

export default OrderWork;