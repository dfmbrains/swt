import React from 'react';
import {Button, Icon, Typography} from "@mui/material";
import {useTranslation} from "react-i18next";

const ChangeLangButton = ({color}) => {
   const {t, i18n} = useTranslation()

   return (
       <Button onClick={() => i18n.changeLanguage(t('currentLanguage') === 'ru' ? 'en' : 'ru')}
               variant={"text"} color={color} startIcon={<Icon>language</Icon>}>
          <Typography variant="subtitle1">{t('currentLanguage').toUpperCase()}</Typography>
       </Button>
   );
};

export default ChangeLangButton;