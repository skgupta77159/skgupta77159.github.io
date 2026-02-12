import React, { useEffect } from "react";
import styled from "./styles";
import { useTranslation } from "react-i18next";

const LanguageSelector: React.FC = () => {
  const { i18n } = useTranslation();

  const languages = [
    { code: "en", label: "English (EN)" },
    { code: "zh", label: "中文（简体） (ZH)" },
    { code: "es", label: "Español (ES)" },
    { code: "fr", label: "Français (FR)" },
    { code: "ar", label: "العربية (AR)" },
    { code: "pt", label: "Português (PT)" },
    { code: "de", label: "Deutsch (DE)" },
    { code: "ja", label: "日本語 (JA)" },
    { code: "ko", label: "한국어 (KO)" },
    { code: "hi", label: "हिंदी (HI)" },
  ];

  useEffect(() => {
    document.body.dir = i18n.dir();
  }, [i18n, i18n.language]);

  return (
    <styled.DropdownSelect
      value={i18n.language}
      onChange={(e) => i18n.changeLanguage(e.target.value)}
    >
      {/* 👇 This controls what is shown when selected */}
      <option value={i18n.language} hidden>
        🌐 {i18n.language.toUpperCase()}
      </option>

      {/* 👇 These appear in the dropdown */}
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.label}
        </option>
      ))}
    </styled.DropdownSelect>
  );
};

export default LanguageSelector;
