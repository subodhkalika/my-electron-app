const getAllClients = () => {
    return "select * from Client_Details";
}
const getClient = (id: any) => {
    return "select * from Client_Details where id=" + id;
}
const createClient = (data: any) => {
    return "INSERT into Client_Details ( \
        about_us, \
        address, \
        assistance_required, \
        contact, \
        current_circumstances, \
        employment_status, \
        firstname, \
        gender, \
        has_survivors_helped, \
        household_composition, \
        indigenous_or_toress_stright_islander, \
        lastname, \
        living_arrangement, \
        note, \
        os_email, \
        os_organisation, \
        os_support_worker, \
        supportworker \
    ) VALUES (" +
        "'" + data.about_us + "', \
        '" + data.address + "', \
        '" + data.assistance_required + "', \
        '" + data.contact + "', \
        '" + data.current_circumstances + "', \
        '" + data.employment_status + "', \
        '" + data.firstname + "', \
        '" + data.gender + "', \
        '" + data.has_survivors_helped + "', \
        '" + data.household_composition + "', \
        '" + data.indigenous_or_toress_stright_islander + "', \
        '" + data.lastname + "', \
        '" + data.living_arrangement + "', \
        '" + data.note + "', \
        '" + data.os_email + "', \
        '" + data.os_organisation + "', \
        '" + data.os_support_worker + "', \
        '" + data.supportworker + "' \
    )";
}
const updateClient = (id: any, data: any) => {
    return "Update Client_Details set \
        about_us = '" + data.about_us + "', \
        address = '" + data.address + "', \
        assistance_required = '" + data.assistance_required + "', \
        contact = '" + data.contact + "', \
        current_circumstances = '" + data.current_circumstances + "', \
        employment_status = '" + data.employment_status + "', \
        firstname = '" + data.firstname + "', \
        gender = '" + data.gender + "', \
        has_survivors_helped = '" + data.has_survivors_helped + "', \
        household_composition = '" + data.household_composition + "', \
        indigenous_or_toress_stright_islander = '" + data.indigenous_or_toress_stright_islander + "', \
        lastname = '" + data.lastname + "', \
        living_arrangement = '" + data.living_arrangement + "', \
        note = '" + data.note + "', \
        os_email = '" + data.os_email + "', \
        os_organisation = '" + data.os_organisation + "', \
        os_support_worker = '" + data.os_support_worker + "', \
        supportworker = '" + data.supportworker + "' \
        WHERE id =" + id;
}
const deleteClient = (id: any) => {
    return "DELETE FROM Client_Details where id=" + id;
}

export const query = {
    getAllClients,
    getClient,
    createClient,
    updateClient,
    deleteClient
}