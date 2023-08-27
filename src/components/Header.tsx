import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Button, Menu, MenuItem } from "@mui/material";

interface HeaderProps {
  children: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({ children }) => {
  const { t, i18n } = useTranslation();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleLanguageMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLanguageSelect = (language: string) => {
    i18n.changeLanguage(language);
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleLanguageMenuOpen}
      >
        {i18n.language.toUpperCase()}
      </Button>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={() => setAnchorEl(null)}
      >
        <MenuItem onClick={() => handleLanguageSelect("pl")}>
          {t("polish")}
        </MenuItem>
        <MenuItem onClick={() => handleLanguageSelect("cs")}>
          {t("czech")}
        </MenuItem>
        <MenuItem onClick={() => handleLanguageSelect("en")}>
          {t("english")}
        </MenuItem>
      </Menu>
      <h1>{t("pageTitle")}</h1>
      {children}
    </div>
  );
};

export default Header;
