import { useTranslation } from 'react-i18next';
import { Flex, Image, Tooltip } from '@chakra-ui/react';
import LogoVN from '@/assets/images/img-vn.png';
import LogoEN from '@/assets/images/img-en.png';

export const MPLanguageSwitcher = () => {
    const { i18n, t } = useTranslation();

    const switchLanguage = () => {
        i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en');
    };

    return (
        <Tooltip label={t('switch_language')}>
            <Flex cursor='pointer' padding={0} margin={0} borderRadius='30px' width='30px' height='30px' onClick={switchLanguage}>
                <Image borderRadius='30px' width='30px' height='30px' src={i18n.language === 'vi' ? LogoVN : LogoEN} />
            </Flex>
        </Tooltip>
    );
}