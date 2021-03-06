import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import theme from "../utils/theme";

const TopFive = ({ users }) => {
  return (
      <TopFiveContainer>
        <div className="topfive-section">
            <div className="card">
                <div className="card-header py-3">
                    <h4 className="text-center mb-0">{`Top 5 [Week 2]`}</h4>
                </div>
                <div className="card-body">
                    <table className="table table-borderless">
                        <thead>
                            <tr>
                                <th scope="col" className="text-center">Pos</th>
                                <th scope="col" className="text-center">Name</th>
                                <th scope="col" className="text-center">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => (
                                    <tr key={i + 1}>
                                        <th scope="row" className="text-center">{i + 1}</th>
                                        <td>{user.name}</td>
                                        <td className="text-center"><strong>{user.points}</strong></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </TopFiveContainer>
  );
};

const TopFiveContainer = styled.div`
    .card {
        border: none;
        border-radius: 25px;
        overflow: hidden;
    }
    .card-header {
        background: transparent linear-gradient(180deg, ${theme.colors.info} 0%, ${theme.colors.accent} 100%) 0% 0% no-repeat padding-box;
        color: ${theme.colors.light};
    }
    h4 {
        font-weight: bold;
        font-size: 24px;
        line-height: 35px;
    }
    table {
        font-size: 18px;
        line-height: 27px;
    }
    thead {
        border-bottom: 1px solid ${theme.colors.gray};
    }
    th {
        font-weight: bold;
    }
`;

TopFive.propTypes = {
    users: PropTypes.array,
  };

export default TopFive;
