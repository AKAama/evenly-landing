import { Heart } from "lucide-react";
import Layout from "../components/Layout";

// 简单致谢
const thanks = {
  opening: "感谢我的好朋友 Stella、Sylvia、Tristen。\n因为总一起出去玩，才有了这个 App。希望以后能一起去更多地方。",
  friends: [],
  closing: "",
};

export default function Thanks() {
  return (
    <Layout compact>
      <main className="thanks-page">
        <p className="section-kicker">Acknowledgments</p>
        <h1>
          致谢
          <Heart className="thanks-heart" size={32} aria-hidden="true" />
        </h1>
        <p className="thanks-lede">
          Evenly 不是一个人做出来的。谢谢你们出现在它诞生的过程里。
        </p>

        {thanks.opening && (
          <section className="thanks-opening">
            {thanks.opening.split("\n").map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </section>
        )}

        {thanks.friends.length > 0 && (
          <ul className="thanks-list">
            {thanks.friends.map((friend) => (
              <li className="thanks-card" key={friend.name}>
                <div className="thanks-card-header">
                  <span className="thanks-avatar" aria-hidden="true">
                    {friend.name.slice(0, 1)}
                  </span>
                  <div>
                    <h2>{friend.name}</h2>
                    {friend.role && <p className="thanks-role">{friend.role}</p>}
                  </div>
                </div>
                {friend.words && (
                  <div className="thanks-words">
                    {friend.words.split("\n").map((line, idx) => (
                      <p key={idx}>{line}</p>
                    ))}
                  </div>
                )}
              </li>
            ))}
          </ul>
        )}

        {thanks.closing && (
          <section className="thanks-closing">
            {thanks.closing.split("\n").map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </section>
        )}
      </main>
    </Layout>
  );
}
