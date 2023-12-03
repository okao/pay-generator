import { useEffect, useState } from 'react';

// material-ui
import { Grid } from '@mui/material';
// material-ui
import { useTheme } from '@mui/material/styles';
import {
    Drawer,
    Fab,
    FormControl,
    FormControlLabel,
    Grid,
    IconButton,
    Radio,
    RadioGroup,
    Slider,
    Tooltip,
    Typography
} from '@mui/material';
import SubCard from 'ui-component/cards/SubCard';

// project imports
import { gridSpacing } from 'store/constant';
import { useForm } from 'react-hook-form';

// meta export
export const meta = () => ({
    title: 'Manage Company | Payment Voucher',
    description: 'Add, Edit, Delete Company'
});

// ==============================|| DEFAULT DASHBOARD ||============================== //

const ManageCompany = () => {
    const [isLoading, setLoading] = useState(true);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();
    const onSubmit = (data) => console.log(data);

    console.log(watch('example')); // watch input value by passing the name of it

    useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <Grid container spacing={gridSpacing}>
                <SubCard title="Font Family">
                    <FormControl>
                        <RadioGroup
                            aria-label="font-family"
                            value={fontFamily}
                            onChange={(e) => setFontFamily(e.target.value)}
                            name="row-radio-buttons-group"
                        >
                            <FormControlLabel
                                value="Roboto"
                                control={<Radio />}
                                label="Roboto"
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 28 },
                                    '& .MuiFormControlLabel-label': {
                                        color: theme.palette.grey[900]
                                    }
                                }}
                            />
                            <FormControlLabel
                                value="Poppins"
                                control={<Radio />}
                                label="Poppins"
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 28 },
                                    '& .MuiFormControlLabel-label': {
                                        color: theme.palette.grey[900]
                                    }
                                }}
                            />
                            <FormControlLabel
                                value="Inter"
                                control={<Radio />}
                                label="Inter"
                                sx={{
                                    '& .MuiSvgIcon-root': { fontSize: 28 },
                                    '& .MuiFormControlLabel-label': {
                                        color: theme.palette.grey[900]
                                    }
                                }}
                            />
                        </RadioGroup>
                    </FormControl>
                </SubCard>
            </Grid>
        </>
    );
};

export default ManageCompany;
