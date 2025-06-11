import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Main } from "./pages/main";
import { ChallengeDetail } from "./pages/challengeDetail";
import { MyPage } from "./pages/mypage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/challenge" element={<ChallengeDetail />} />
        <Route path="Diary" />
        <Route path="/my" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
};
